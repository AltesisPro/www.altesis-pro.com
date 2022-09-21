import { ensureDir } from "https://deno.land/std@0.156.0/fs/mod.ts";
import { dirname } from "https://deno.land/std@0.139.0/path/mod.ts";

export async function getTwBinFullPath(
  version: string,
  dir: string
): Promise<string> {
  const targets = {
    darwin: {
      x86_64: "macos-x64",
      aarch64: "macos-arm64",
    },
    linux: {
      x86_64: "linux-x64",
      aarch64: "linux-arm64",
    },
    windows: {
      x86_64: "windows-x64.exe",
      aarch64: "",
    },
  };

  const os = Deno.build.os;
  const arch = Deno.build.arch;
  const name = `tailwindcss-v${version}-${targets[os][arch]}`;
  const binFullPath = `${dir}/${name}`;

  // Check if the file exists
  try {
    // Maybe substitute with Deno.chmod(0o755)
    await Deno.stat(binFullPath);
  } catch {
    // else download the file
    await dlTwBin(version, targets[os][arch], binFullPath);
  }
  return binFullPath;
}

async function dlTwBin(version: string, target: string, dest: string) {
  const dlUrl = new URL(
    `https://github.com/tailwindlabs/tailwindcss/releases/download/v${version}/tailwindcss-${target}`
  );

  const fileResponse = await fetch(dlUrl);
  if (fileResponse.body) {
    await ensureDir(dirname(dest));
    const file = await Deno.open(dest, {
      create: true,
      write: true,
      mode: 0o755,
    });
    await fileResponse.body.pipeTo(file.writable);
  }
}

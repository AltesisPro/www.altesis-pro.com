import { writableStreamFromWriter } from "https://deno.land/std@0.156.0/streams/mod.ts";
import { ensureFile } from "https://deno.land/std@0.156.0/fs/mod.ts";

export async function getTwBinFullPath(version: string, dir: string): Promise<string> {
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
    await ensureFile(dest);
    await Deno.chmod(dest, 0o755);
    const file = await Deno.open(dest, { write: true });
    const writableStream = writableStreamFromWriter(file);
    await fileResponse.body.pipeTo(writableStream);
  }
}

import { ensureDir } from "https://deno.land/std@0.156.0/fs/mod.ts";
import { dirname } from "https://deno.land/std@0.156.0/path/mod.ts";
import { Page } from "https://deno.land/x/lume@v1.11.4/core.ts";

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
  const dlUrl = new URL(
    `https://github.com/tailwindlabs/tailwindcss/releases/download/v${version}/tailwindcss-${targets[os][arch]}`
  );

  try {
    await ensureDir(dirname(binFullPath));
    const binFile = await Deno.open(binFullPath, {
      create: true,
      write: true,
      mode: 0o755,
      createNew: true,
    });

    const fileResponse = await fetch(dlUrl);
    if (fileResponse.body) {
      await fileResponse.body.pipeTo(binFile.writable);
    }
  } catch (e) {
    if (!(e instanceof Deno.errors.AlreadyExists)) {
      await Deno.remove(binFullPath, { recursive: true });
      throw e;
    }
  }
  return binFullPath;
}

export function addHeadLink(page: Page) {
  const { document } = page;
  if (!document) return;
  const cssLinkEl = document.createElement(
    `<link rel="stylesheet" href="css/main.css" />`
  );

  if (!Array.from(document.head.children).includes(cssLinkEl))
    document.head.appendChild(cssLinkEl);
}

import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
//import jsx_preact from "lume/plugins/jsx_preact.ts";
import metas from "lume/plugins/metas.ts";
import tailwindcss from "./_plugins/tailwindcss.ts";

const site = lume({
  src: "./src",
  server: {
    open: true,
  },
});

site.use(base_path());
site.use(metas());
// site.use(jsx_preact());
site.copy("static", ".");
site.copy([".jpg", ".gif", ".png"]);
site.use(tailwindcss());

export default site;

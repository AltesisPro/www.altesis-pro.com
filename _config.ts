import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import metas from "lume/plugins/metas.ts";
import windi from "lume/plugins/windi_css.ts";

const site = lume({
  src: "./src",
  server: {
    open: true,
  },
});

site.use(base_path());
site.use(metas());
site.use(jsx_preact());
site.use(
  windi({
    config: {
      theme: {
        colors: {
          primary: {
            
          }
        }
      }
    },
    mode: "compile",
  })
);
site.copy("static", ".");
site.copy([".jpg", ".gif", ".png"]);

export default site;

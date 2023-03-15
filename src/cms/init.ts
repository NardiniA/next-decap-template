import type { CMS } from "netlify-cms-core";
import config from "./config";
import register from "./register";

export const init: Promise<CMS | any> = Promise.all([
    import("netlify-cms-app"),
    // @ts-ignore
    import("netlify-cms-media-library-cloudinary"),
]).then(([manage, cloudinary]) => {
    const cms: CMS = manage?.default;
    cms.registerMediaLibrary(cloudinary?.default);
    cms.init({ config });
    register(cms);
    return;
});
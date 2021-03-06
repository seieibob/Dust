import { Detector } from "./utils/webgl-detect.js";
import { Dust } from "./dust.js";
import { gui } from "./gui.js";

let Init = () => {
    let container = document.getElementById("dust-container");
    if(!container) throw new Error("No #dust-container was found");
    
    if ( !Detector.HasWebGL() ) {
        //exit("WebGL is not supported on this browser.");
        console.log("WebGL is not supported on this browser.");
        container.innerHTML = Detector.GetErrorHTML();
        container.classList.add("no-webgl");
    }
    else {
        let dust = new Dust(container, () => {
            // Dust is now fully loaded
            gui.Init(dust, container);
        });
    }
}

if (document.readyState === 'complete') {
    Init();
} else {
    window.onload = () => {
        Init();
    }
}
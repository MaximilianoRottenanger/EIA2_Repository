namespace A02_EventInspector {
    console.log("Start");
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        let divs: HTMLElement = <HTMLElement>document.querySelector("div");
        divs.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo)
        divs.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {
        // console.log("mouse");

    }

    function logInfo(_event: Event): void {
        // console.log("event");
    }
}
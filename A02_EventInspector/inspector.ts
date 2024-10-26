namespace A02_EventInspector {
    // console.log("Start");
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
        let button: HTMLElement = <HTMLElement>document.getElementById("myButton");
        button.addEventListener("click", customEvent);
        button.addEventListener("buttonClicked", logCustomEvent);
    }

    function setInfoBox(_event: MouseEvent): void {
        // console.log("mouse");
        let span: HTMLElement = <HTMLElement>document.querySelector("span");
        let box: string = ""
        let offset: number = 10
        span.innerText = box
        span.style.top = (_event.clientY + offset) + "px";
        span.style.left = (_event.clientX + offset) + "px";

    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }

    function customEvent(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>_event.target;

        let newEvent: CustomEvent = new CustomEvent("buttonClicked", { bubbles: true });

        button.dispatchEvent(newEvent);
    }

    function logCustomEvent(_event: Event): void {
        console.log("Button Geklickt");
    }
}
function downloadPDF() {
  const pdfUrl = "./assets/Prudhvi_FullstackWebDev.pdf";

  let link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Prudhvi_FullstackWebDev.pdf"; // You can change the downloaded file name here
  link.target = "_blank";

  const clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: false,
  });

  link.dispatchEvent(clickEvent);
}

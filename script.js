document.getElementById("random-receipt").addEventListener("click", () => {
  const receiptNo = "V1K" + Math.random().toString(36).substr(2, 9).toUpperCase();
  document.getElementById("receipt-no").value = receiptNo;
});

document.getElementById("random-utr").addEventListener("click", () => {
  const utr = "AXOM" + Math.random().toString(36).substr(2, 11).toUpperCase();
  document.getElementById("utr").value = utr;
});

document.getElementById("upload-logo").addEventListener("change", (event) => {
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById("bank-logo").src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
});

document.getElementById("download-btn").addEventListener("click", () => {
  const slip = document.getElementById("slip");
  html2canvas(slip).then((canvas) => {
    const link = document.createElement("a");
    link.download = "receipt.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
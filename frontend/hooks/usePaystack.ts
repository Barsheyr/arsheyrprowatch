export const loadPaystackScript = (callback: () => void) => {
  if (document.getElementById("paystack-script")) {
    callback(); // Script already loaded, proceed
    return;
  }

  const script = document.createElement("script");
  script.src = "https://js.paystack.co/v1/inline.js";
  script.id = "paystack-script";
  script.onload = callback;
  document.body.appendChild(script);
};

export const loadPaystackScript = (callback: () => void) => {
  const script = document.createElement("script");
  script.src = "https://js.paystack.co/v1/inline.js";
  script.onload = callback;
  document.body.appendChild(script);
};

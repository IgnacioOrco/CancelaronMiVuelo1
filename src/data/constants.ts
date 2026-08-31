export const BRAND = {
  name: "CancelaronMiVuelo",
  tagline: "Cancelaron tu vuelo. No tus derechos.",
  subtagline: "Tu abogado experto al alcance de tu mano",
  partner: "AbogacIAr",
  lawFirm: "Estudio Márquez & Asociados",
  whatsappNumber: "5491123456789", // Reemplazable con número de producción
  supportEmail: "reclamos@cancelaronmivuelo.com",
  phoneDisplay: "+54 9 11 2345-6789",
};

export const getWhatsAppLink = (message?: string) => {
  const defaultText = "Hola CancelaronMiVuelo, quiero consultar gratis por un problema con mi vuelo.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
};

import { AuthShell, type AuthPanel } from "./auth-shell";
import { LoginForm } from "./login-form";

const panel: AuthPanel = {
  eyebrow: "Oʻzbekiston startup ekotizimi",
  title: "Startup karyerangiz shu yerda davom etadi.",
  subtitle:
    "Toʻxtagan joyingizdan davom eting — yangi startup oʻrinlari muntazam qoʻshilib turadi.",
  points: [
    "Maosh + ulush — har eʼlonda ochiq",
    "Faqat tasdiqlangan startuplar",
    "Toʻgʻridan-toʻgʻri asoschilarga ariza",
  ],
};

export function LoginView() {
  return (
    <AuthShell panel={panel}>
      <LoginForm />
    </AuthShell>
  );
}

import { AuthShell, type AuthPanel } from "./auth-shell";
import { RegisterWizard } from "./register-wizard";

const panel: AuthPanel = {
  eyebrow: "Bir necha daqiqada",
  title: (
    <>
      Eng yaxshi startuplar
      <br />
      jamoalariga qoʻshiling.
    </>
  ),
  subtitle: "Profil yarating va Oʻzbekistonning oʻsayotgan startuplari bilan bogʻlaning.",
  points: [
    "Mutaxassis ham, startup ham — bitta joyda",
    "Maosh va ulush shaffofligi",
    "Roʻyxatdan oʻtish bepul",
  ],
};

export function RegisterView() {
  return (
    <AuthShell panel={panel} reverse>
      <RegisterWizard />
    </AuthShell>
  );
}

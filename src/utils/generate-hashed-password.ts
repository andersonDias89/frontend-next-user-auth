import { hashPassword } from "@/lib/password-hashing";

(async () => {
  const minhaSenha = ""; // NÃO ESQUECER DE APAGAR SUA SENHA DAQUI
  const hashDaSuaSenhaEmBase64 = await hashPassword(minhaSenha);

  console.log({ hashDaSuaSenhaEmBase64 });
})();

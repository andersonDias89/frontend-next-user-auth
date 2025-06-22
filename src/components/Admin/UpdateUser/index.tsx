import { getPublicUserFromApi } from "@/lib/user/api/get-user";
import { UpdateUserForm } from "@/components/UpdateUserForm";
import ErrorMessage from "@/components/ErrorMessage";

export async function UpdateUser() {
  const user = await getPublicUserFromApi();

  if (!user) {
    return (
      <ErrorMessage
        contentTitle="🫣"
        content="Você precisa fazer login novamente."
      />
    );
  }

  return <UpdateUserForm user={user} />;
}

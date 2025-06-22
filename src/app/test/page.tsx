"use client";

import Button from "@/components/common/ui/Buttons/Button";
import ButtonDark from "@/components/common/ui/Buttons/ButtonDark";

export default function TestPage() {
  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Botão Clicado");
    console.log(event);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Button>Button</Button>
      <ButtonDark onclick={(event) => handleChange(event)}>
        Button Dark
      </ButtonDark>
    </div>
  );
}

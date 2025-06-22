type DashboardProps = {
  params: {
    id: string;
  };
};

export default function DashboardPage({ params }: DashboardProps) {
  return <div>Bem-vindo, usuário ID: {params.id}</div>;
}

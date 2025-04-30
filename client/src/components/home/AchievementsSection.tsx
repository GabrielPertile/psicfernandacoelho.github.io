interface Achievement {
  value: string;
  label: string;
}

const achievements: Achievement[] = [
  { value: "+850", label: "Pacientes Atendidos" },
  { value: "10+", label: "Anos de Experiência" },
  { value: "95%", label: "Índice de Satisfação" },
  { value: "6", label: "Especializações" }
];

const AchievementsSection = () => {
  return (
    <section className="py-12 bg-[hsl(var(--primary))]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {achievements.map((achievement, index) => (
            <div key={index} className="p-6">
              <div className="text-white text-4xl font-bold mb-2">{achievement.value}</div>
              <p className="text-white/80 text-sm">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

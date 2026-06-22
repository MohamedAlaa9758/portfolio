import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <div className="page">
      <section className="sec">
        <div className="skills-wrap">
          {skills.map((group) => (
            <div key={group.label}>
              <div className="sg-lbl">{group.label}</div>
              <div className="skills-row">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`pill${item.hot ? " h" : ""}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

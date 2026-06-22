import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <div className="page">
      <section className="sec">
        <div className="tl">
          {experience.map((job) => (
            <div className="exp-it" key={job.period + job.role}>
              <div className="exp-period">{job.period}</div>
              <div className="exp-hd">
                <div className="exp-role">{job.role}</div>
                <span className="exp-badge">{job.badge}</span>
              </div>
              <ul className="exp-ul">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

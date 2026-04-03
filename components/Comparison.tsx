const features = [
  { label: "Prescription-strength", otc: false, oral: true, clinic: true, soothrx: true },
  { label: "No pills / no opioids", otc: true, oral: false, clinic: true, soothrx: true },
  { label: "Targeted to pain site", otc: "partial", oral: false, clinic: true, soothrx: true },
  { label: "Doctor-prescribed", otc: false, oral: true, clinic: true, soothrx: true },
  { label: "Delivered to your door", otc: false, oral: "partial", clinic: false, soothrx: true },
  { label: "Under $80/month", otc: true, oral: "partial", clinic: false, soothrx: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="text-accent font-semibold" aria-label="Yes">
        &#10003;
      </span>
    );
  if (value === false)
    return (
      <span className="text-text-secondary/40" aria-label="No">
        &#10007;
      </span>
    );
  return (
    <span className="text-text-secondary/60" aria-label="Partial">
      ~
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
          Not another OTC cream.
        </h2>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-border text-sm font-medium text-text-secondary">
                <th className="pb-4 pr-4 font-medium"></th>
                <th className="pb-4 px-4 text-center font-medium">OTC Topicals</th>
                <th className="pb-4 px-4 text-center font-medium">Oral Pain Meds</th>
                <th className="pb-4 px-4 text-center font-medium">Pain Clinic Creams</th>
                <th className="pb-4 px-4 text-center font-medium rounded-t-lg bg-secondary/10 text-primary font-semibold">
                  SoothRx
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr
                  key={f.label}
                  className={i < features.length - 1 ? "border-b border-border/60" : ""}
                >
                  <td className="py-4 pr-4 text-sm font-medium text-primary">
                    {f.label}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Cell value={f.otc} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Cell value={f.oral} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Cell value={f.clinic} />
                  </td>
                  <td className="py-4 px-4 text-center bg-secondary/10">
                    <Cell value={f.soothrx} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

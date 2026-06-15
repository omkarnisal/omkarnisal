import React from 'react';

export default function FootballAnalyticsPage() {
  const reports = [
    {
      title: 'Club Finance Analysis Engine',
      metric: '€1.2B payroll tracked',
      desc: 'Correlating seasonal wage budgets against finishing points margins to analyze squad spending efficiency.',
      status: 'Active script logs'
    },
    {
      title: 'Performance Predictor Pipeline',
      metric: '82.4% validation accuracy',
      desc: 'Predicting final league standings by analyzing squad age profiles, tactical depth indices, and home/away features.',
      status: 'Validation cycles'
    },
    {
      title: 'Dynamic Data Dashboards',
      metric: '20+ clubs processed',
      desc: 'Scraping transfer windows parameters and player wage details to map financial imbalances across European leagues.',
      status: 'Visualizing data'
    }
  ];

  return (
    <div className="space-y-8 py-4 max-w-xl">
      <section className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">
          Football Analytics
        </h1>
        <p className="text-xs text-neutral-500 font-mono">
          Data engineering logs examining wage spends, performance metrics, and club finance statistics:
        </p>
      </section>

      <hr />

      {/* Reports List */}
      <section className="space-y-6 font-mono text-xs text-neutral-800">
        {reports.map((report, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-neutral-100 pb-1">
              <span className="font-bold text-neutral-900">{report.title}</span>
              <span className="text-neutral-400 font-normal shrink-0">[{report.status}]</span>
            </div>
            
            <p className="text-neutral-700 font-sans text-sm leading-relaxed pt-1">
              {report.desc}
            </p>

            <div className="text-[10px] text-neutral-400">
              METRIC: {report.metric}
            </div>
          </div>
        ))}
      </section>

      <hr />

      {/* Future telemetry */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold font-mono text-neutral-900 uppercase tracking-wide">
          # Future Pipelines Planned
        </h2>
        <ul className="list-disc pl-5 text-xs text-neutral-600 font-mono space-y-1.5">
          <li>[EXPECTED_GOALS_SHOT_MAP] - Event coordinate charting.</li>
          <li>[PLAYER_CLUSTERING_VECTORS] - K-means grouping of spatial actions.</li>
        </ul>
      </section>
    </div>
  );
}

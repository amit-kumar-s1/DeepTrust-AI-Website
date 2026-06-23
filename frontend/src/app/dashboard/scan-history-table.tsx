const scans = [
  {
    file: "photo001.jpg",
    type: "Image",
    date: "15 Jun 2026",
    result: "Authentic",
    confidence: "94%",
  },

  {
    file: "video001.mp4",
    type: "Video",
    date: "15 Jun 2026",
    result: "Manipulated",
    confidence: "87%",
  },

  {
    file: "contract.pdf",
    type: "Document",
    date: "14 Jun 2026",
    result: "Authentic",
    confidence: "96%",
  },

  {
    file: "article.txt",
    type: "Text",
    date: "14 Jun 2026",
    result: "Authentic",
    confidence: "92%",
  },
];

export default function ScanHistoryTable() {
  return (
    <div
      className="
      rounded-3xl

      border
      border-white/10

      bg-white/5

      overflow-hidden
      "
    >
      <table className="w-full">

        <thead
          className="
          bg-white/5
          "
        >
          <tr>

            <th className="p-4 text-left">
              Filename
            </th>

            <th className="p-4 text-left">
              Type
            </th>

            <th className="p-4 text-left">
              Date
            </th>

            <th className="p-4 text-left">
              Result
            </th>

            <th className="p-4 text-left">
              Confidence
            </th>

            <th className="p-4 text-left">
              Action
            </th>

          </tr>
        </thead>

        <tbody>

          {scans.map((scan) => (
            <tr
              key={scan.file}
              className="
              border-t
              border-white/10
              "
            >
              <td className="p-4">
                {scan.file}
              </td>

              <td className="p-4">
                {scan.type}
              </td>

              <td className="p-4">
                {scan.date}
              </td>

              <td className="p-4">
                {scan.result}
              </td>

              <td className="p-4">
                {scan.confidence}
              </td>

              <td className="p-4">
                <button
                  className="
                  px-4
                  py-2

                  rounded-lg

                  bg-cyan-500/20
                  text-cyan-400
                  "
                >
                  View
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}
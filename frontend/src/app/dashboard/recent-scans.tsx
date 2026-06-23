const scans = [
  {
    file: "photo_001.jpg",
    result: "Authentic",
    score: "94%",
  },

  {
    file: "video_002.mp4",
    result: "Manipulated",
    score: "81%",
  },

  {
    file: "contract.pdf",
    result: "Authentic",
    score: "96%",
  },

  {
    file: "article.txt",
    result: "Authentic",
    score: "91%",
  },
];

export default function RecentScans() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      "
    >
      <h2 className="text-xl font-bold mb-6">
        Recent Scans
      </h2>

      <div className="space-y-4">
        {scans.map((scan) => (
          <div
            key={scan.file}
            className="
            flex
            justify-between
            items-center

            border-b
            border-white/10

            pb-4
            "
          >
            <div>
              <p className="font-medium">
                {scan.file}
              </p>

              <p className="text-sm text-gray-400">
                {scan.result}
              </p>
            </div>

            <span className="font-bold">
              {scan.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function SectionMarker({ idx, tag }: { idx: string; tag: string }) {
  return (
    <div className="section-marker">
      <span className="idx">{idx}</span>
      <span className="marker-line" />
      <span className="marker-tag">{tag}</span>
    </div>
  )
}

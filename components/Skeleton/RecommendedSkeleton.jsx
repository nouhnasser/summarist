export default function RecommendedSkeleton() {
  return (
    <>
      <div className="recommended__books--skeleton-wrapper">
        <div className="recommended__books--skeleton">
          <div className="recommended__book--skeleton"></div>
          <div className="recommended__title--skeleton"></div>
          <div className="recommended__info--skeleton"></div>
        </div>
      </div>
    </>
  );
}

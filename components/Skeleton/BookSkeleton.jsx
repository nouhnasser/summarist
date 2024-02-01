export default function BookSkeleton() {
  return (
    <div className="inner__book--skeleton">
      <div className="inner__book--skeleton-content">
        <div className="skeleton-box w-[70%] h-[32px] mb-[16px]"></div>
        <div className="skeleton-box w-[40%] h-[32px] mb-[16px]"></div>
        <div className="skeleton-box w-full h-[32px] mb-[16px]"></div>
        <div className="skeleton-box w-[45%] h-[64px] mb-[16px]"></div>
        <div className="skeleton-box w-[1/2] h-[32px] mb-[16px]"></div>
        <div className="skeleton-box w-[1/5] h-[32px] mb-[16px]"></div>
        <div className="skeleton-box w-[1/2] h-[64px] mb-[16px]"></div>
        <div className="skeleton-box w-[40%] h-[180px] mb-[16px]"></div>
        <div className="skeleton-box w-[4/5] h-[268px]"></div>
      </div>
      <div className="inner__book--skeleton-img">
        <div className="skeleton-box w-[300px] h-[300px] mb-[16px]"></div>
      </div>
    </div>
  );
}

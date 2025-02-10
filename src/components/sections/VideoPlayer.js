
export default function VideoPlayer() {
    return (
        <div className="video-container">
          <video autoPlay loop muted>
            <source src="/videos/Saldanas-Graphic-Design-video.mp4" type="video/mp4" />
          </video>
        </div>
      );
  }
  
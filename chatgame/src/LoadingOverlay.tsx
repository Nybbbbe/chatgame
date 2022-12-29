const LoadingOverlay = (props: any) => {
  return (
    <div className="overlay">
        <div className="overlay__inner">
            <div className="overlay__content">
              <span className="spinner"></span>
              <h2 className="spinner__title">{props.message}</h2>
            </div>
        </div>
    </div>
  )
}

export default LoadingOverlay;
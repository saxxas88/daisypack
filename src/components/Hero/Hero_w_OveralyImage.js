import React from 'react'

function Hero_w_OveralyImage({opacity_value, url_bg, title, info, cta}) {
  return (
    <div className="hero min-h-[80vh]" style={{ backgroundImage: `url("${url_bg})` }}>
  <div className={`hero-overlay bg-opacity-${opacity_value}`}></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold baloo_da">{title}</h1>
      <p className="mb-5">{info}</p>
      <button className="btn btn-primary" onClick={cta?.onClickCTA}>{cta?.title}</button>
    </div>
  </div>
</div>
  )
}

export default Hero_w_OveralyImage


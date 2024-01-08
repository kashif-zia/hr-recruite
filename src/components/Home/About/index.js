import React, { useState, useRef } from 'react'
import styles from './about.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef(null)

  const handlePlayPause = () => {
    const video = videoRef.current
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true)
    }
  }

  const handleMouseLeave = () => {
    setShowControls(false)
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
    setShowControls(false)
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
  }

  return (
    <div>
      <section className={styles.aboutSection} id="about-us">
        <Container>
          <Row className="g-0">
            <Col md={6} className={styles.imageCol}>
              <div
                className={styles.videoAbout}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <video
                  ref={videoRef}
                  className={styles.videomp4}
                  controls
                  loop
                  muted
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                >
                  <source
                    src="/assets/video/video.mp4"
                    type="video/mp4"
                    allowFullScreen
                  />
                </video>
                {/* Play/Pause button */}
                {(!isPlaying || showControls) && (
                  <div
                    className={styles.playPauseButton}
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? (
                      <svg className={styles.playicon}>
                        <use xlinkHref="/assets/images/svg/icons.svg#playicon"></use>
                      </svg>
                    ) : (
                      <svg className={styles.stopicon}>
                        <use xlinkHref="/assets/images/svg/icons.svg#stopicon"></use>
                      </svg>
                    )}
                  </div>
                )}
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.videoColText}>
                <div className={styles.aboutSubText}>About Us</div>
                <div className={styles.aboutHeading}>
                  Discover IDENBRID: Where Vision Meets Innovation
                </div>
                <p className={styles.aboutParagragh}>
                  Experience the essence of our office through captivating
                  visuals! Dive into our dynamic world by exploring our office
                  video.
                </p>
                <div className={styles.Headingh4}>
                  Embark on Excellence with IDENBRID: Innovate and Inspire!
                </div>
                <p className={styles.aboutParagragh}>
                  Explore IDENBRID: Where innovation and passion meet
                  excellence. Click the link below of slides to know more about
                  IDENBRID.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About

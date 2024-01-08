'use client'
import React, { useState } from 'react'
import styles from './employee.module.css'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import Image from 'next/image'

import HrBushra from '@/assets/employee/Hr-Bushra.png'
import Bushra from '@/assets/employee/Bushra.png'
import PMAhmad from '@/assets/employee/Pm-Ahmad.png'
import Ahmad from '@/assets/employee/Ahmad.png'
import PMOHamza from '@/assets/employee/Pmo-Hamza.png'
import Hamza from '@/assets/employee/Hamza.png'
import BDFaizan from '@/assets/employee/Bd-Faizan.png'
import Faizan from '@/assets/employee/Faizan.png'

const Employee = () => {
  // Modal Second
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)
  // Modal Second
  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)
  // Modal Third
  const [show3, setShow3] = useState(false)
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)
  // Modal Forth
  const [show4, setShow4] = useState(false)
  const handleClose4 = () => setShow4(false)
  const handleShow4 = () => setShow4(true)
  return (
    <div>
      <section className={styles.employeeSection} id="employees">
        <Container>
          <div className={styles.employeeSubText}>Meet Our Employees</div>
          <div className={styles.employeeHeadingh2}>Interview</div>
          <Row>
            <Col md={6}>
              <div className={styles.employeeBox} onClick={handleShow1}>
                <div className={styles.employeeImage}>
                  <Image
                    src={HrBushra}
                    alt="Bushra Riaz"
                    width={458}
                    height={150}
                    className={styles.employeethumnail}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <div className={styles.employeeName}>Bushra Riaz</div>
                  <div className={styles.employeeDesignation}>HR Manager</div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.employeeBox} onClick={handleShow2}>
                <div className={styles.employeeImage}>
                  <Image
                    src={PMAhmad}
                    alt="PM Hamza"
                    width={458}
                    height={150}
                    className={styles.employeethumnail}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <div className={styles.employeeName}>M. Ahmad </div>
                  <div className={styles.employeeDesignation}>
                    Project Manager
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={styles.employeeBox} onClick={handleShow3}>
                <div className={styles.employeeImage}>
                  <Image
                    src={PMOHamza}
                    alt="PMO Hamza"
                    width={458}
                    height={150}
                    className={styles.employeethumnail}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <div className={styles.employeeName}>Hamza Ashfaq</div>
                  <div className={styles.employeeDesignation}>
                    Project Manager Officer
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.employeeBox} onClick={handleShow4}>
                <div className={styles.employeeImage}>
                  <Image
                    src={BDFaizan}
                    alt="BD Faizan"
                    width={458}
                    height={150}
                    className={styles.employeethumnail}
                  />
                </div>
                <div className={styles.employeeInfo}>
                  <div className={styles.employeeName}>Faizan Haider </div>
                  <div className={styles.employeeDesignation}>
                    Business Developer
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Moodal First */}
        <Modal
          show={show1}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose1}
          animation={true}
        >
          <Modal.Body className={styles.ModalemployeeBody}>
            <Modal.Header
              closeButton
              className={styles.closeButton}
            ></Modal.Header>
            <Row className="g-0">
              <Col md={4}>
                <div className={styles.employeeCol}>
                  <Image
                    src={Bushra}
                    alt="Bushra Riaz"
                    width={468}
                    height={484}
                    className={styles.employeepic}
                  />
                  <div className={styles.employeeModalinfo}>
                    <div className={styles.employeeModalDesignation}>
                      HR Manager
                    </div>
                    <div className={styles.employeeModalName}>Bushra Riaz</div>
                    <div className={styles.employeeModaJoinningDate}>
                      Joined in March, 2022
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className={styles.employeeDetail}>
                  <h5 className={styles.employeeDesination}>
                    Building Careers in IT for Fun
                  </h5>
                  <div className={styles.employeeBackgroundDetail}>
                    <p>
                      Embarking on the path to becoming an HR Manager, my
                      professional journey started at IDENBRID—an IT company
                      known for its people-first culture and commitment to
                      creating a positive workplace. In my role as an HR
                      Manager, I guide the human side of our organization,
                      blending strategic planning and hands-on actions within
                      the beat of our core principles: Plan, Do, Report.
                    </p>
                    <p>
                      At IDENBRID, success means more than just hitting goals;
                      it is about embracing a flexible approach. We carefully
                      layout plans, turn them into tangible actions, and share
                      achievements through clear reporting. This philosophy not
                      not just a part of our work; it is the essence of an
                      environment where everyone is growth is a continuous
                      journey.
                    </p>
                    <p>
                      As an HR Manager, my purpose is to foster a workplace
                      where individuals not only work but thrive, contributing
                      to the company is success. This aligns with my goal of
                      evolving into an influential HR Manager, shaping a
                      workplace where each person is potential is not just
                      acknowledged but nurtured for collective triumph.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        {/* Moodal Second */}
        <Modal
          show={show2}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose2}
          animation={true}
        >
          <Modal.Body className={styles.ModalemployeeBody}>
            <Modal.Header
              closeButton
              className={styles.closeButton}
            ></Modal.Header>
            <Row className="g-0">
              <Col md={4}>
                <div className={styles.employeeCol}>
                  <Image
                    src={Ahmad}
                    alt="PM Ahmad"
                    width={468}
                    height={484}
                    className={styles.employeepic}
                  />
                  <div className={styles.employeeModalinfo}>
                    <div className={styles.employeeModalDesignation}>
                      Project Manager
                    </div>
                    <div className={styles.employeeModalName}>
                      Muhammad Ahmad
                    </div>
                    <div className={styles.employeeModaJoinningDate}>
                      Joined in Feb, 2021
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className={styles.employeeDetail}>
                  <h5 className={styles.employeeDesination}>
                    Leading Fun Projects Towards Achievement
                  </h5>
                  <div className={styles.employeeBackgroundDetail}>
                    <p>
                      Embarking on the quest to become a Tech Project Manager, I
                      found my professional home in IDENBRID—an innovative IT
                      haven renowned for its forward-thinking culture and
                      commitment to cutting-edge projects. In my role as a Tech
                      Project Manager, I weave through the intricacies of
                      diverse projects, orchestrating a seamless dance between
                      strategic planning and hands-on execution, guided by our
                      mantra: Plan, Execute, Report.
                    </p>
                    <p>
                      We craft detailed plans, turn them into decisive technical
                      actions, and transparently share our project stories
                      through comprehensive reporting. This philosophy is more
                      than a guideline; it is the pulse of an environment that
                      thrives on continuous improvement and the thrill of
                      exploration.
                    </p>
                    <p>
                      As a Tech Project Manager, my mission is to steer projects
                      to not only meet goals but to push boundaries,
                      contributing significantly to the company technological
                      legacy. Join us to be the next Project Manager at
                      IDENBRID.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        {/* Moodal Third */}
        <Modal
          show={show3}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose3}
          animation={true}
        >
          <Modal.Body className={styles.ModalemployeeBody}>
            <Modal.Header
              closeButton
              className={styles.closeButton}
            ></Modal.Header>
            <Row className="g-0">
              <Col md={4}>
                <div className={styles.employeeCol}>
                  <Image
                    src={Hamza}
                    alt="PMO Hamza"
                    width={468}
                    height={484}
                    className={styles.employeepic}
                  />
                  <div className={styles.employeeModalinfo}>
                    <div className={styles.employeeModalDesignation}>
                      Project Manager Officer
                    </div>
                    <div className={styles.employeeModalName}>Hamza Ashfaq</div>
                    <div className={styles.employeeModaJoinningDate}>
                      Joined in July, 2022
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className={styles.employeeDetail}>
                  <h5 className={styles.employeeDesination}>
                    Leading Fun Projects Towards Achievement
                  </h5>
                  <div className={styles.employeeBackgroundDetail}>
                    <p>
                      Embarking on the quest to become a Tech Project Manager, I
                      found my professional home in IDENBRID—an innovative IT
                      haven renowned for its forward-thinking culture and
                      commitment to cutting-edge projects. In my role as a Tech
                      Project Manager, I weave through the intricacies of
                      diverse projects, orchestrating a seamless dance between
                      strategic planning and hands-on execution, guided by our
                      mantra: Plan, Execute, Report.
                    </p>
                    <p>
                      We craft detailed plans, turn them into decisive technical
                      actions, and transparently share our project stories
                      through comprehensive reporting. This philosophy is more
                      than a guideline; its the pulse of an environment that
                      thrives on continuous improvement and the thrill of
                      exploration.
                    </p>
                    <p>
                      As a Tech Project Manager, my mission is to steer projects
                      to not only meet goals but to push boundaries,
                      contributing significantly to the companys technological
                      legacy. Join us to be the next Project Manager at
                      IDENBRID.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        {/* Moodal Forth */}
        <Modal
          show={show4}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose4}
          animation={true}
        >
          <Modal.Body className={styles.ModalemployeeBody}>
            <Modal.Header
              closeButton
              className={styles.closeButton}
            ></Modal.Header>
            <Row className="g-0">
              <Col md={4}>
                <div className={styles.employeeCol}>
                  <Image
                    src={Faizan}
                    alt="BD Faizan"
                    width={468}
                    height={484}
                    className={styles.employeepic}
                  />
                  <div className={styles.employeeModalinfo}>
                    <div className={styles.employeeModalDesignation}>
                      Business Developer
                    </div>
                    <div className={styles.employeeModalName}>
                      Faizan Haider
                    </div>
                    <div className={styles.employeeModaJoinningDate}>
                      Joined in Nov, 2021
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className={styles.employeeDetail}>
                  <h5 className={styles.employeeDesination}>
                    Dealing with human beings for sales.
                  </h5>
                  <div className={styles.employeeBackgroundDetail}>
                    <p>
                      Embracing the aspiration to become a Business & Sales
                      Expert, I embarked on a journey with IDENBRID, an IT
                      company that resonates with an OLP culture. The company
                      works on a powerful trio: Plan, Do, Report. As a Business
                      Development Executive, my role involves navigating the
                      intricate realms of business, from strategic planning to
                      hands-on execution, all while adhering to the core
                      principle that guides our endeavors.
                    </p>
                    <p>
                      At IDENBRID, the pathway to success is not just about
                      achieving goals but embracing a dynamic approach that
                      encapsulates planning meticulously, translating plans into
                      decisive actions, and articulating the outcomes through
                      comprehensive reporting. This philosophy not only shapes
                      our work culture but also fosters an environment where
                      growth is not just a goal but a continuous journey.
                    </p>
                    <p>
                      IDENBRID commitment to innovation and client satisfaction
                      satisfaction resonates with my vision of becoming a lead,
                      propelling me to contribute meaningfully to the company
                      success and evolve into a true Business & Sales Expert.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </section>
    </div>
  )
}

export default Employee

import React from 'react';

function Courses() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-4">หลักสูตรที่เปิดสอน</h1>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">หลักสูตรเทคโนโลยีสารสนเทศ</h5>
                            <p className="card-text">
                                เรียนรู้เกี่ยวกับการพัฒนาแอปพลิเคชัน การจัดการระบบเครือข่าย และฐานข้อมูล
                                พร้อมการประยุกต์ใช้เทคโนโลยีสมัยใหม่
                            </p>
                            <ul className="list-group">
                                <li className="list-group-item">การพัฒนาเว็บไซต์</li>
                                <li className="list-group-item">การจัดการฐานข้อมูล</li>
                                <li className="list-group-item">ระบบเครือข่ายคอมพิวเตอร์</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;

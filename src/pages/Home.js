import React from 'react';

function Home() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-4">ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
                <p className="lead">
                    สาขาเทคโนโลยีสารสนเทศมุ่งเน้นการพัฒนาทักษะด้านเทคโนโลยีสมัยใหม่
                    เพื่อสร้างนักศึกษาที่มีความพร้อมในโลกดิจิทัล
                </p>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img src="/IT.png" alt="IT" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h3>ปรัชญาของสาขา</h3>
                    <p>
                        "สร้างความรู้และนวัตกรรม เพื่อนำเทคโนโลยีสารสนเทศไปใช้ให้เกิดประโยชน์สูงสุด
                        ต่อสังคมและเศรษฐกิจ"
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;

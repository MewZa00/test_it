import React from 'react';

function ContactUs() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1 className="display-4">ติดต่อเรา</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3>ข้อมูลการติดต่อ</h3>
                    <p><strong>ที่อยู่:</strong> 1 ถนนป่าตัน อำเภอเมืองเชียงใหม่</p>
                    <p><strong>โทร:</strong> 053-412-362</p>
                    <p><strong>อีเมล:</strong> info@lpc.ac.th</p>
                </div>
                <div className="col-md-6">
                    <h3>แผนที่</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?..."
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Map"
                        className="rounded"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;

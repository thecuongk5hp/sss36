import React, { useState } from 'react';

type ContentKey = 'Trang chủ' | 'Sản phẩm' | 'Giới thiệu' | 'Liên hệ';

function Navbar() {
  const [activeTab, setActiveTab] = useState<ContentKey>('Trang chủ');
  const content: Record<ContentKey, string> = {
    'Trang chủ': 'Nội dung Trang chủ',
    'Sản phẩm': 'Nội dung Sản phẩm',
    'Giới thiệu': 'Nội dung Giới thiệu',
    'Liên hệ': 'Nội dung Liên hệ'
  };

  return (
    <div>
      <nav>
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as ContentKey)}
            style={{ fontWeight: activeTab === tab ? 'bold' : 'normal' }}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div>{content[activeTab]}</div>
    </div>
  );
}

export default Navbar;
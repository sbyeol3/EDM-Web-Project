import React from 'react';
const Option = props => (
    <input type="option" {...props} />
  )
const OptionGu = () => {
    const Gu = ['강남구','강동구','강서구','강북구','관악구','광진구','구로구','금천구','노원구','동대문구','도봉구','동작구',
    '마포구','서대문구','성동구','성북구','서초구','송파구','영등포구','용산구','양천구','은평구','종로구','중구','중랑구'];

    return (
        <>
        {Gu.map((v,i)=>{ 
            return <option key={v} value={v}>{v}</option>})}
        </>
        );
}
export default OptionGu;
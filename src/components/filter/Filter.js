import './filter.scss'
import Select from 'react-select'


function Filter() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
  return (
    <div className='filter-bar'>
        <div className='select-items'>
            <div className='item'>
            <p>by Category :</p>
                <Select 
                className="basic-single" 
                isClearable={true}
                name="category"
                options={options}
                />
            </div>
            <div className='item'>
            <p>by Sub-Category :</p>
                <Select 
                className="basic-single" 
                isClearable={true}
                name="category"
                options={options}
                />
            </div>
            <div className='item'>
            <p>Price Range :</p>
            <input type="number" className='min-input' placeholder='Min'/>
            <div className='seperator'>-</div>
            <input type="number" className='max-input' placeholder='Max' />
            </div>
        
        </div>
    </div>
  )
}

export default Filter
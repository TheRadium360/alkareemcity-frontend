import React from 'react';
import '../css/App.css';
/* <i class="fa-solid fa-square-left"></i> */

const Residential = () => {
    return (
        <div>
        <div className='residential_heading'>RESIDENTIAL PLOTS 
</div> 

        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='residential_3marla'>
                        <div className='residential_marla'>3 MARLA</div>
                        <div className='residential_plots'>Residential Plots </div>
                        <div className='residential_blocks'>There Are 4 Blocks In</div>
                        <div className='residential_alkareem'>AL-KAREEM SOCIETY</div>
                    </div>
                    <div className='residential_name'>
                        <div>Abu Bakar Block</div>
                        <div>Usman Block</div>
                        <div>Umer Block</div>
                        <div>Ali Block</div>
                    </div>
                <div className="btn btn-dark residential_button"   >VIEW DETAIL</div>
                </div>

                <div className='col-6'>
                <div className='residential_backcolor'> <i className="left_icon fa-solid fa-circle-arrow-left"></i> <i className="right_icon fa-solid fa-circle-arrow-right"></i></div>
                    <div className='residential_backimg'> </div>
                

                    </div>
                </div>

            </div>

        </div>

    );
};

export default Residential;
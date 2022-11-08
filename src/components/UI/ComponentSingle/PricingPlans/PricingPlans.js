import React from 'react';

import './PricingPlans.scss'

function PricingPlans() {
    return (
        <div className='pricing-plans'>
            <h2 className='room-title'>Pricing Plans</h2>
            <div className='pricing-plans__table--wrap'>
                <table className='pricing-plans__table'>
                    <thead>
                        <tr>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$250</td>
                            <td>$250</td>
                            <td>$250</td>
                            <td>$250</td>
                            <td>$250</td>
                            <td>$250</td>
                            <td>$250</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default PricingPlans;
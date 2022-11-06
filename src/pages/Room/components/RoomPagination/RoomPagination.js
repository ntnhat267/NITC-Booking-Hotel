import { Pagination } from '@mui/material';
import usePagination from 'components/UI/Pagination/Pagination';
import RoomItem from 'components/UI/RoomItem/RoomItem';
import React, { useState } from 'react';
import { Col } from 'reactstrap';

function RoomPagination({rooms}) {

    let [page, setPage] = useState(1);
    const PER_PAGE = 6;

    const count = Math.ceil(rooms.length / PER_PAGE);
    const _DATA = usePagination(rooms, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
        console.log(p);
      };

    return (
            <>
                <div className='d-flex justify-content-center'>
                    <Pagination 
                        count={count} 
                        page={page}
                        variant="outlined" 
                        shape="rounded" 
                        onChange={handleChange}
                        size='large'
                    />
                </div>
                {_DATA.currentData().map(room =>(
                    <Col key={room.id} className='col-lg-4 col-md-6 col-12' >
                        <RoomItem room={room}/>
                    </Col>
                ))}
                <div className='d-flex justify-content-center'>
                    <Pagination 
                        count={count} 
                        page={page}
                        variant="outlined" 
                        shape="rounded" 
                        onChange={handleChange}
                        size='large'
                    />
                </div>
            </>
    );
}

export default RoomPagination;
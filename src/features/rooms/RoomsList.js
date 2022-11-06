import Loading from 'components/UI/Loading/Loading'
import RoomItem from 'components/UI/RoomItem/RoomItem'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import {fetchRooms, getRoomsError, getRoomsStatus, selectAllRooms} from './roomsSlice'



const RoomsList = ({hot}) => {

    const dispatch = useDispatch()

    const rooms = useSelector(selectAllRooms)
    const roomsStatus = useSelector(getRoomsStatus)
    const error = useSelector(getRoomsError)


    useEffect(() => {
        if(roomsStatus === 'idle') {
            dispatch(fetchRooms())
        }
    },[roomsStatus,dispatch])

    let content;

    if(roomsStatus === 'loading') {
        content = <Loading/>
    } else if (roomsStatus === 'succeeded'){
        console.log('succeeded');
        let newRooms = rooms;
        if(hot) {
            newRooms = rooms.slice(0,3)
        }
        
        let newContent = newRooms.map(room => 
            <Col key={room.id} className='col-lg-4 col-md-6 col-12' >
                <RoomItem room={room}/>
            </Col>);
        content =<Row>{newContent}</Row> 

    }
    else if (roomsStatus === 'failed') {
        content = <p>{error}</p>;
    }


    return (
        <Container className='room-area section-padding'>
           <div className='room-wrap'>
                {/* <Row>         */}
                  {content}   
                {/* </Row> */}
            </div>
        </Container>
    )
}

export default RoomsList
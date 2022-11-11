import Loading from 'components/UI/Loading/Loading'
import RoomItem from 'components/UI/RoomItem/RoomItem'
import RoomPagination from 'pages/Room/components/RoomPagination/RoomPagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import {fetchRooms, getRoomsError, getRoomsStatus, selectAllRooms} from './roomsSlice'



const RoomsList = ({main}) => {

    const navigate = useNavigate()

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

        switch (main) {
            case "main":
                content =<Row>
                     {rooms.slice(0,3).map(room => 
                        <Col key={room.id} className='col-lg-4 col-md-6 col-12' >
                            <RoomItem room={room}/>
                        </Col>)}
                </Row>
                break;
            case "second":
                content = <Row>
                    <RoomPagination single={rooms}/>
                </Row>
                break;
            case "tertiary":
                content = <Row>
                    {rooms.slice(0,6).map(room => 
                        <Col 
                            key={room.id} 
                            className='discover-our-rooms__item col-4' 
                            onClick={() => {
                                navigate(`/room/${room.id}`)
                                window.scrollTo(10, 0);    
                            }}
                        >
                            <img src={room.avatar} alt={room.name} className='h-100 w-100'></img>
                        </Col>)}
                </Row>
                break;
            default:
                break;
        }
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
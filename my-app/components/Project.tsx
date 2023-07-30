import type { ProjectType } from '../lib/types';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


export default function Project({ name, iconUrl, duration, description, skills}: ProjectType) {
    return (
        <Card className='w-75' bg='dark' text='white' style={{ flex: 1 }}>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>{name}
                            {iconUrl &&
                                <span>
                                    {' '}{' '}
                                    <Link href={iconUrl} style={{ color: 'white' }} passHref>
                                        <FontAwesomeIcon icon={faMedium}/>
                                    </Link>
                                </span>
                            }
                        </Card.Title>
                        <Card.Text>
                            <small><i>{duration}</i></small>
                        </Card.Text>
                        <Card.Text as='div'>
                            {description?.map((paragraph: string, key: number) => (
                                <div key={key}>
                                    {paragraph}
                                    <br></br>
                                    <br></br>
                                </div>
                            ))}
                        </Card.Text>
                        <div className='mt-3 tags'>
                            {skills?.map((skill: string, key: number) => (
                                <span key={key}>
                                    <Badge pill bg='primary'>
                                        {skill}
                                    </Badge>{' '}
                                </span>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
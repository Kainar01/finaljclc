
import React from 'react'

import CallBack from './CallBack';
class Contacts extends React.Component{
    
    render(){
        return (
            <footer className="contacts page-footer center-on-small-only text-center " id="contacts">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-4 col-md-6 ml-auto">
					<h5 className="title mb-3"><strong>О нас</strong></h5>
					<p className="lead">Японско-китайский языковой центр</p>
					<p>в Астане работает в сфере образования с 2013 года. Наш центр осуществляет обучение японскому и китайскому языку, а также сотрудничает с языковыми школами в Японии.</p>
				</div>
				<hr className="w-100 clearfix d-sm-none"/>
				<div className="col-xl-4 ml-auto col-lg-4 mt-2 mb-1 col-md-6 wow fadeIn" data-wow-delay="0.3s">
					<h5 className="title"><strong>Контакты</strong></h5>  
					<p><i className="fa fa-home mr-3"></i> Астана, ул.Сарыарка 3/1, БЦ "Болашак", офис 401.</p>
					<p><i className="fa fa-envelope mr-3"></i> jclc.ast@mail.ru</p>
					<p><i className="fa fa-phone mr-3"></i> +7–777–305–08–36</p>
					<p><i className="fa fa-phone mr-3"></i> +7–701–305–01–88</p>
				</div>
				<hr className="w-100 clearfix d-sm-none"/>
				<div className="col-xl-3 ml-auto col-lg-4 mt-2 mb-1 col-md-6 wow fadeIn" data-wow-delay="0.3s">
					<h5 className="title mb-2"><strong>график работы</strong></h5>
					<table className="table footer-table text-center">
						<tbody className="text-white">
							<tr>
								<td >Пн - Пт:</td>
								<td>9.00 - 21.00</td>
							</tr>
							<tr>
								<td>Сб - Вс:</td>
								<td>10.00 - 19.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<hr/>
		<div className="footer-copyright">
			<div className="container-fluid">
				© 2020 Copyright: <a href="#home" className="text-white"> Японско-китайский языковой центр</a>
			</div>
		</div>
		<div className="contact-card">
        <CallBack/>
		</div>
	</footer>

    );
    }
}
export default Contacts
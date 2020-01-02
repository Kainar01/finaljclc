
import React from 'react'
import Advantage from '../About/Advantage'
class Contacts extends React.Component{
    
    render(){
        return (
            <footer class="page-footer center-on-small-only text-center " id="contacts">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-4 col-md-6 ml-auto">
					<h5 class="title mb-3"><strong>О нас</strong></h5>
					<p class="lead">Японско-китайский языковой центр</p>
					<p>в Астане работает в сфере образования с 2013 года. Наш центр осуществляет обучение японскому и китайскому языку, а также сотрудничает с языковыми школами в Японии.</p>
				</div>
				<hr class="w-100 clearfix d-sm-none"/>
				<div class="col-xl-4 ml-auto col-lg-4 mt-2 mb-1 col-md-6 wow fadeIn" data-wow-delay="0.3s">
					<h5 class="title"><strong>Контакты</strong></h5>  
					<p><i class="fa fa-home mr-3"></i> Астана, ул.Сарыарка 3/1, БЦ "Болашак", офис 401.</p>
					<p><i class="fa fa-envelope mr-3"></i> hitomi.jc@mail.ru</p>
					<p><i class="fa fa-phone mr-3"></i> +7–777–305–08–36</p>
					<p><i class="fa fa-phone mr-3"></i> +7–701–305–01–88</p>
				</div>
				<hr class="w-100 clearfix d-sm-none"/>
				<div class="col-xl-3 ml-auto col-lg-4 mt-2 mb-1 col-md-6 wow fadeIn" data-wow-delay="0.3s">
					<h5 class="title mb-2"><strong>график работы</strong></h5>
					<table class="table footer-table text-center">
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
		<div class="footer-copyright">
			<div class="container-fluid">
				© 2017 Copyright: <a href="" className="text-white"> Японско-китайский языковой центр</a>
			</div>
		</div>
        <Advantage/>
	</footer>

    );
    }
}
export default Contacts
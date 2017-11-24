import React from 'react';
import Link from 'next/link';

const LayoutCategories = props => (
	<div>

		<div className="row">
			<div className="col-sm-2">
				<ul>
					<li><Link href="/films" as="/category/films"><a>films</a></Link></li>
					<li><Link href="/series" as="/category/series"><a>series</a></Link></li>
					<li><Link href="/shows" as="/category/shows"><a>shows</a></Link></li>
				</ul>
			</div>

			<div className="col-sm-10">
				{props.children}
			</div>
		</div>

	</div>
);

export default LayoutCategories;

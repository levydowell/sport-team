'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PlayerAPI } from '../../data/playerAPI';

export default function Player() {
	const { id } = useParams();
	const player = PlayerAPI.get(parseInt(id, 10));

	if (!player) {
		return <div>Sorry, but the player was not found</div>;
	}

	return (
		<main>
			<div>
				<h1>
					{player.name} (#{player.number})
				</h1>
				<h2>Position: {player.position}</h2>
				<Link href='/roster'>Back</Link>
			</div>
		</main>
	);
}
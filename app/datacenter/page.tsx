'use client';

import { motion } from 'framer-motion';
import { FiServer, FiCloud, FiShield, FiZap, FiMaximize2, FiWifi, FiThermometer } from 'react-icons/fi';
import { useState } from 'react';
import FloorPlan from './components/FloorPlan';

const FACILITY_FEATURES = [
	{
		title: 'Power Infrastructure',
		specs: [
			'10MW Total Capacity',
			'2N Power Distribution',
			'Tier 4 Design',
			'Green Energy Options',
		],
		description:
			'State-of-the-art power systems with full redundancy and renewable energy integration',
		icon: <FiZap className="w-6 h-6 text-amber-400" />,
	},
	{
		title: 'Cooling Systems',
		specs: [
			'N+1 Cooling Units',
			'Hot/Cold Aisle Containment',
			'Water-Side Economization',
			'Real-Time Thermal Mapping',
		],
		description: 'Advanced cooling infrastructure designed for maximum efficiency',
		icon: <FiThermometer className="w-6 h-6 text-blue-400" />,
	},
	{
		title: 'Network Connectivity',
		specs: [
			'100Gbps Backbone',
			'Multiple Carriers',
			'Direct Cloud On-Ramps',
			'Dark Fiber Available',
		],
		description: 'Carrier-neutral facility with diverse connectivity options',
		icon: <FiWifi className="w-6 h-6 text-purple-400" />,
	},
	{
		title: 'Security Systems',
		specs: [
			'24/7 Armed Security',
			'Biometric Access',
			'CCTV Coverage',
			'Mantrap Entry',
		],
		description: 'Multi-layer security with advanced access control',
		icon: <FiShield className="w-6 h-6 text-red-400" />,
	},
];

const CONSTRUCTION_PHASES = [
	{
		phase: 'Phase 1 - Site Preparation',
		date: 'Q1 2029',
		status: 'planned',
		tasks: [
			'Environmental Assessment',
			'Ground Breaking',
			'Foundation Work',
			'Initial Power Infrastructure',
		],
	},
	{
		phase: 'Phase 2 - Core Infrastructure',
		date: 'Q3 2029',
		status: 'planned',
		tasks: [
			'Building Shell Construction',
			'Power Systems Installation',
			'Cooling Infrastructure',
			'Network Backbone Setup',
		],
	},
	{
		phase: 'Phase 3 - Systems Integration',
		date: 'Q1 2030',
		status: 'planned',
		tasks: [
			'Security Systems Deployment',
			'NOC Setup',
			'Environmental Controls',
			'Testing & Certification',
		],
	},
	{
		phase: 'Phase 4 - Launch',
		date: 'Q2 2030',
		status: 'planned',
		tasks: [
			'Final Testing',
			'Staff Training',
			'Customer Migration Planning',
			'Full Operations Start',
		],
	},
];

type EnvironmentalMetric = {
	label: string;
	value: number;
	unit: string;
	trend: 'up' | 'down' | 'stable';
	goal: number;
};

type Certification = {
	name: string;
	status: 'achieved' | 'pending' | 'planned';
	date: string;
	description: string;
};

const ENVIRONMENTAL_METRICS: EnvironmentalMetric[] = [
	{
		label: 'Power Usage Effectiveness',
		value: 1.1,
		unit: 'PUE',
		trend: 'down',
		goal: 1.1,
	},
	{
		label: 'Renewable Energy Usage',
		value: 85,
		unit: '%',
		trend: 'up',
		goal: 100,
	},
	{
		label: 'Water Usage Efficiency',
		value: 0.5,
		unit: 'L/kWh',
		trend: 'down',
		goal: 0.5,
	},
	{
		label: 'Carbon Footprint',
		value: 15,
		unit: 'kg CO₂/kW',
		trend: 'down',
		goal: 0,
	},
];

const CERTIFICATIONS: Certification[] = [
	{
		name: 'Uptime Institute Tier IV',
		status: 'planned',
		date: 'Q3 2029',
		description: 'Highest level of reliability and redundancy certification',
	},
	{
		name: 'ISO 27001',
		status: 'planned',
		date: 'Q4 2029',
		description: 'Information security management certification',
	},
	{
		name: 'LEED Gold',
		status: 'planned',
		date: 'Q1 2030',
		description: 'Green building certification',
	},
];

export default function DataCenter() {
	const [selectedPhase, setSelectedPhase] = useState(0);

	return (
		<div className="p-6 min-h-screen bg-gradient-to-b from-[#0a0a0a] to-zinc-900">
			{/* Hero Section */}
			<div className="mb-12 text-center">
				<h1 className="text-4xl font-bold text-white mb-4">
					AEPLO Data Center
				</h1>
				<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
					Our upcoming state-of-the-art facility designed for maximum reliability,
					efficiency, and sustainability
				</p>
			</div>

			{/* Quick Stats */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
				{[
					{ label: 'Total Space', value: '50,000', unit: 'sq ft' },
					{ label: 'Power Capacity', value: '10', unit: 'MW' },
					{ label: 'PUE Target', value: '1.2', unit: '' },
					{ label: 'Tier Rating', value: '4', unit: '' },
				].map((stat, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						className="p-6 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30"
					>
						<p className="text-3xl font-bold text-white mb-2">
							{stat.value}
							<span className="text-zinc-400 text-xl ml-1">{stat.unit}</span>
						</p>
						<p className="text-zinc-400">{stat.label}</p>
					</motion.div>
				))}
			</div>

			{/* Facility Features */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-6">
					Facility Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{FACILITY_FEATURES.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: index * 0.2 }}
							className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-300"
						>
							<div className="flex items-start space-x-4">
								<span className="text-2xl mt-1">{feature.icon}</span>
								<div>
									<h3 className="text-lg font-semibold text-white mb-2">
										{feature.title}
									</h3>
									<p className="text-zinc-400 mb-4">
										{feature.description}
									</p>
									<ul className="space-y-2">
										{feature.specs.map((spec, idx) => (
											<li key={idx} className="flex items-center text-zinc-300">
												<svg
													className="w-4 h-4 mr-2 text-blue-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
												{spec}
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Construction Timeline */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-6">
					Construction Timeline
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					{CONSTRUCTION_PHASES.map((phase, index) => (
						<motion.div
							key={index}
							className={`p-6 rounded-lg border ${
								selectedPhase === index
									? 'border-blue-500 bg-blue-900/20'
									: 'border-zinc-800 bg-zinc-900/50'
							} cursor-pointer hover:border-blue-500 transition-all duration-300`}
							onClick={() => setSelectedPhase(index)}
						>
							<div className="mb-4">
								<p className="text-blue-400 text-sm">{phase.date}</p>
								<h3 className="text-lg font-semibold text-white">
									{phase.phase}
								</h3>
							</div>
							<ul className="space-y-2">
								{phase.tasks.map((task, idx) => (
									<li
										key={idx}
										className="text-zinc-400 text-sm flex items-start"
									>
										<span className="mr-2">•</span>
										{task}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>

			{/* Environmental Impact and Certifications */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-6">
					Environmental Impact & Certifications
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Environmental Metrics */}
					<div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
						<h3 className="text-lg font-semibold text-white mb-4">
							Environmental Metrics
						</h3>
						<ul className="space-y-4">
							{ENVIRONMENTAL_METRICS.map((metric, idx) => (
								<li
									key={idx}
									className="flex justify-between text-zinc-400 text-sm"
								>
									<span>{metric.label}</span>
									<span className="font-medium text-white">
										{metric.value}
										{metric.unit}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Certifications */}
					<div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
						<h3 className="text-lg font-semibold text-white mb-4">
							Certifications
						</h3>
						<ul className="space-y-4">
							{CERTIFICATIONS.map((cert, idx) => (
								<li
									key={idx}
									className="flex justify-between text-zinc-400 text-sm"
								>
									<span>{cert.name}</span>
									<span className="font-medium text-white">
										{cert.status}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			{/* Environmental Impact */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-6">Environmental Impact</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{ENVIRONMENTAL_METRICS.map((metric, index) => (
						<motion.div
							key={index}
							className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: index * 0.1 }}
						>
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-lg text-white">{metric.label}</h3>
								<span className={`px-2 py-1 rounded-full text-sm ${
									metric.trend === 'down' ? 'bg-green-900/50 text-green-400 border border-green-800' :
									metric.trend === 'up' ? 'bg-blue-900/50 text-blue-400 border border-blue-800' :
									'bg-yellow-900/50 text-yellow-400 border border-yellow-800'
								}`}>
									{metric.trend === 'down' ? '↓' : metric.trend === 'up' ? '↑' : '→'}
								</span>
							</div>
							<div className="space-y-2">
								<div className="flex justify-between items-baseline">
									<span className="text-3xl font-bold text-white">
										{metric.value}
										<span className="text-sm text-zinc-400 ml-1">{metric.unit}</span>
									</span>
									<span className="text-zinc-400">
										Goal: {metric.goal} {metric.unit}
									</span>
								</div>
								<div className="w-full bg-zinc-800 rounded-full h-2">
									<div
										className="bg-blue-500 h-2 rounded-full"
										style={{
											width: `${(metric.value / metric.goal) * 100}%`
										}}
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Certifications */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-6">Certifications</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{CERTIFICATIONS.map((cert, index) => (
						<motion.div
							key={index}
							className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: index * 0.1 }}
						>
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-semibold text-white">{cert.name}</h3>
								<span className={`px-3 py-1 rounded-full text-sm ${
									cert.status === 'achieved' ? 'bg-green-900/50 text-green-400 border border-green-800' :
									cert.status === 'pending' ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-800' :
									'bg-blue-900/50 text-blue-400 border border-blue-800'
								}`}>
									{cert.status}
								</span>
							</div>
							<p className="text-zinc-400 mb-2">{cert.description}</p>
							<p className="text-sm text-zinc-500">Expected: {cert.date}</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* Floor Plan */}
			<div className="mb-12">
				<h2 className="text-2xl font-semibold text-white mb-6">Facility Layout</h2>
				<div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
					<FloorPlan />
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
						{[
							{ label: "Total Racks", value: "500+" },
							{ label: "Meeting Rooms", value: "6" },
							{ label: "Loading Docks", value: "4" },
							{ label: "Security Checkpoints", value: "3" }
						].map((stat, index) => (
							<div key={index} className="text-center p-4 bg-zinc-800/30 rounded-lg">
								<p className="text-2xl font-bold text-white">{stat.value}</p>
								<p className="text-sm text-zinc-400">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Contact CTA */}
			<div className="rounded-lg border border-zinc-800 bg-gradient-to-br from-blue-900/20 to-zinc-900/50 p-8 text-center">
				<h2 className="text-2xl font-bold text-white mb-4">
					Interested in Our Data Center?
				</h2>
				<p className="text-zinc-400 mb-6">
					Contact us to learn more about deployment options and custom solutions
				</p>
				<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
					Get in Touch
				</button>
			</div>
		</div>
	);
}
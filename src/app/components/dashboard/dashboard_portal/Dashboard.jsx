import React from 'react';
import Announcements from '../dashboard_components/Announcements';
import YourClassesSchedule from '../dashboard_components/YourClassesSchedule';
import QuickLinks from '../dashboard_components/QuickLinks';
import AccessClassRecordings from '../dashboard_components/AccessClassRecordings';

const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row flex-wrap p-2 space-y-4 lg:space-y-0 lg:space-x-4 bg-violet-50">
            {/* Left side */}
            <div className="flex flex-col w-full lg:w-1/3 space-y-4 lg:ml-11">
                <Announcements />
                <YourClassesSchedule />
            </div>

            {/* Center */}
            <div className="w-full lg:w-1/4">
                <QuickLinks />
            </div>

            {/* Right side */}
            <div className="w-full lg:w-1/3">
                <AccessClassRecordings />
            </div>
        </div>
    );
};

export default Dashboard;

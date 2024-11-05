import React from 'react'

const NotificationPanel = () => {
  return (
    <div className="w-full bg-white border-l-[1px] top-0 right-0 h-screen p-6 ">
          {/* Notifications */}
          <h3 className="text-gray-700 text-sm font-medium">Notifications</h3>
          <ul className="mt-4 space-y-4">
            {/* Notification Item */}
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">You completed a task.</div>
              <div className="text-gray-500 text-xs">Just now</div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">Your request was approved.</div>
              <div className="text-gray-500 text-xs">1 hour ago </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">Bizboost reached 1000 users.</div>
              <div className="text-gray-500 text-xs">2 days ago</div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">New update available.</div>
              <div className="text-gray-500 text-xs">5 days ago</div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-gray-600 text-sm">Team meeting scheduled.</div>
              <div className="text-gray-500 text-xs">1 week ago</div>
            </li>
            {/* Repeat for other notifications */}
          </ul>

          {/* Activities */}
          <h3 className="mt-8 text-gray-700 text-sm font-medium">Activities</h3>
          <ul className="mt-4 space-y-4">
            {/* Activity Item */}
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">🔄&emsp;Alex updated the project description.</div>
            </li>
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">🎉&emsp;Rajiv added a new milestone.</div>
            </li>
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">🛠️&emsp;Sneha fixed a login issue.</div>
            </li>
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">🎨&emsp;Nina redesigned the dashboard.</div>
            </li>
            <li className="flex items-left">
              {/* <img className="h-6 w-6 rounded-full" src="./src/assets/chat-bot.svg" alt="User Avatar" /> */}
              <div className="text-sm text-gray-600">✅&emsp;Ayesha completed the initial setup.</div>
            </li>
            {/* Repeat for other activities */}
          </ul>

          {/* Contacts */}
          <h3 className="mt-8 text-gray-700 text-sm font-medium">Contacts</h3>
          <ul className="mt-4 space-y-4">
            {/* Contact Item */}
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=mike" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">Rahul Jain — Online</div>
            </li>
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=sarah" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">Emma Smith — Offline</div>
            </li>
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=face" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">David Chen — Away</div>
            </li>
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=natali" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">Lily Thompson — Busy</div>
            </li>
            <li className="flex items-center">
              <img className="h-6 w-6 rounded-full" src="https://i.pravatar.cc/100?u=face-2" alt="User Avatar" />
              <div className="ml-3 text-sm text-gray-600">Maria Lopez — Online</div>
            </li>
            {/* Repeat for other contacts */}
          </ul>
        </div>
  )
}

export default NotificationPanel